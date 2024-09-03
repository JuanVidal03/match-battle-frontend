

const UserTableRowSkeleton = () => {
    return (
        <tr>
            <td className='w-[40%]'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 skeleton">
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className="font-bold skeleton w-[150px] h-5"></div>
                        <div className="text-sm skeleton w-[100px] h-5"></div>
                    </div>
                </div>
            </td>
            <td className='w-[40%]'>
                <div className='skeleton w-[150px] h-5'></div>
            </td>
            <td className="w-[100%]">
                <div className='w-full h-full flex gap-4 items-center'>
                    <div className="w-8 h-8 skeleton rounded-full"></div>
                    <p className='skeleton w-[100px] h-5'></p>
                </div>
            </td>
        </tr>
    );
}

export default UserTableRowSkeleton;
