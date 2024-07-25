import React, { useState } from "react";

import { FiFile } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";

import filesDataReal from "./filesDate";

const ViewFiles = () => {
  const convertBytestoGB = (bytes) => {
    if (bytes === 0) return "0 KB";
    let k = 1024;
    let sizes = ["KB", "MB", "GB", "TB"];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const [filesData, setFilesData] = useState(filesDataReal);

  const sortByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date);
  };

  const onClickSort = () => {
    setFilesData(filesDataReal.sort(sortByDate));
  };

  const sortBySize = (a, b) => {
    return b.size - a.size;
  };

  const onClickSortSize = () => {
    setFilesData(filesDataReal.sort(sortBySize));
    console.log(filesData);
  };

  const totalSize = filesData.reduce((acc, file) => acc + file.size, 0);
  return (
    <div className="h-full">
      <div className="p-20">
        <div className="flex items-center mb-4">
          <BiArrowBack
            size={20}
            className="mr-2 cursor-pointer"
            onClick={() => (window.location.href = "/view-folders")}
          />
        </div>
        <div className="flex justify-between">
          <h1 className="text-2xl">View Files</h1>
          <div className="flex items-center">
            <h2 className="mr-2">Total Size:</h2>
            <h2>{convertBytestoGB(totalSize)}</h2>
          </div>
        </div>
        <div className="table mt-4 w-full">
          <div className="flex justify-end mb-10">
            <button
              className="p-2 bg-gray-200 rounded-lg me-5"
              onClick={onClickSort}
            >
              Sort by Date
            </button>
            <button
              className="p-2 bg-gray-200 rounded-lg"
              onClick={onClickSortSize}
            >
              Sort by Size
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th></th>
                <th className="p-2 pl-0">File Name</th>
                <th>Date Modified</th>
                <th>Size</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {filesData.map((file, index) => (
                <tr key={index} className="border-b-2 border-gray-100">
                  <td className="p-2">
                    <FiFile size={20} className="mr-2" />
                  </td>
                  <td>{file.name}</td>
                  <td>{file.date}</td>
                  <td>{convertBytestoGB(file.size)}</td>
                  <td>
                    <MdDelete
                      size={20}
                      className="text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer mt-4 bottom-0 absolute p-2 bg-gray-600 w-full flex items-center justify-between">
        <p className="text-white text-sm">Total Files: {filesData.length}</p>
        <p className="text-white text-sm">
          Total Size: {convertBytestoGB(totalSize)}
        </p>
        <p className="text-white text-sm">Files View</p>
      </div>
    </div>
  );
};

export default ViewFiles;
