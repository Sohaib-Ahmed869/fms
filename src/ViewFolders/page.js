import React, { useEffect, useState } from "react";
import folders from "./folderdate";
import { BiFolder } from "react-icons/bi";
import ContextMenu from "./contextmenu";
import { Modal } from "react-bootstrap";
import "./tooltip.css";

const ViewFolders = () => {
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    xPos: "0px",
    yPos: "0px",
  });

  const handleContextMenu = (event, folder) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      xPos: `${event.pageX}px`,
      yPos: `${event.pageY}px`,
    });
  };

  const handleOpen = () => {
    console.log("Open Folder");
    setContextMenu({ ...contextMenu, visible: false });
  };

  const handleDelete = () => {
    console.log("Delete Folder");
    setContextMenu({ ...contextMenu, visible: false });
  };

  const handleProperties = (folder) => {
    setSelectedFolder(folder);
    setShowProperties(true);
  };

  // Clicking anywhere else on the page will close the context menu
  window.onclick = () => {
    if (contextMenu.visible) {
      setContextMenu({ ...contextMenu, visible: false });
    }
  };

  const convertBytestoGB = (bytes) => {
    if (bytes === 0) return "0 KB";
    let k = 1024;
    let sizes = ["KB", "MB", "GB", "TB"];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const [totalSize, setTotalSize] = useState(0);

  const [selectedFolder, setSelectedFolder] = useState(null);

  const [showProperties, setShowProperties] = useState(false);

  useEffect(() => {
    let total = 0;
    folders.forEach((folder) => {
      total += folder.size;
    });
    setTotalSize(total);
  }, []);

  return (
    <div className="p-20" onContextMenu={(e) => e.preventDefault()}>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-2">View Folders</h1>
        <p className="text-gray-500">
          Total Size: {convertBytestoGB(totalSize)}
        </p>
        <p className="text-gray-500">Total Folders: {folders.length}</p>
        <p className="text-gray-500">Right click on a folder to see options</p>
      </div>
      <div className="text-center p-10 border-2 border-gray-200 rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-4 mt-4">
          {folders.map((folder, index) => (
            <div
              key={index}
              className="tooltip"
              onClick={() => {
                window.location.href = "/view-files";
              }}
            >
              <div
                className="p-4 border-2 border-gray-200 rounded-lg text-center flex flex-col items-center cursor-pointer hover:bg-gray-100"
                onClick={() => console.log("Folder clicked", folder.name)}
                onContextMenu={(e) => handleContextMenu(e, folder)}
              >
                <BiFolder size={50} className="text-blue-500" />
                <p className="mt-2">{folder.name}</p>
                <p className="text-sm text-gray-500">{folder.date_modified}</p>
                <span className="tooltiptext">
                  Name: {folder.name}
                  <br />
                  Date Modified: {folder.date_modified}
                  <br />
                  Size: {folder.size} {/* Assuming you have size data */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContextMenu
        xPos={contextMenu.xPos}
        yPos={contextMenu.yPos}
        menuVisible={contextMenu.visible}
        onOpen={handleOpen}
        onDelete={handleDelete}
        onProperties={() => handleProperties(contextMenu.folder)}
      />
      {showProperties && (
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"></div>
      )}
      <Modal
        show={showProperties}
        onHide={() => setShowProperties(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-10 modal modalbody"
      >
        <Modal.Header closeButton>
          <Modal.Title>Folder Properties</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-left mb-10">
          <p>
            Name: <span className="text-blue-500">Folder 1</span>
          </p>
          <p>
            Date Modified: <span className="text-blue-500">2021-09-01</span>
          </p>
          <p>
            Size: <span className="text-blue-500">10240</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => setShowProperties(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewFolders;
