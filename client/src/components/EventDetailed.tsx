import React from 'react';

const EventDetailed: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border w-full">
        <table className="table w-full" >
            <thead className="text-neutral-400 text-sm font-medium uppercase">
            <tr>
                <th className="w-1/3 px-6 py-3 text-left">ACTOR</th>
                <th className="w-1/3 px-6 py-3 text-left">ACTION</th>
                <th className="w-1/3 px-6 py-3 text-left">DATE</th>
            </tr>
            </thead>
            <tbody>
            <tr >
                <td className="px-6 py-2">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Name</p>
                        <p className="col-span-3">abdelrahman</p>
                    </div>
                </td>
                <td className="px-6 py-2">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Name</p>
                        <p className="col-span-3">abdelrahman</p>
                    </div>
                </td>
                <td className="px-6 py-2">
                    <div className="grid grid-cols-5">
                        <p className="text-neutral-400 col-span-2">Readable</p>
                        <p className="col-span-3">Abdelrahman</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-2">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Email</p>
                        <p className="col-span-3">Abdelrahman</p>
                    </div>
                </td>
                <td className="px-6 py-2">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Object</p>
                        <p className="col-span-3">Abdelrahman</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-2">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">ID</p>
                        <p className="col-span-3">Abdelrahman</p>
                    </div>
                </td>
                <td className="px-6 py-2">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">ID</p>
                        <p className="col-span-3">sdfa</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-4">
                    <div className="grid grid-rows-2"> 
                        <p className="text-neutral-400 col-span-1">METADATA</p>
                        <p>Abdelrahman</p>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <div className="grid grid-rows-2"> 
                        <p className="text-neutral-400 col-span-1">TARGET</p>
                        <p>Abdelrahman</p>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  );
};

export default EventDetailed;