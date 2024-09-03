
const UserTableRow = ({ user }) => {
    return (
        <tr>
            <td className='w-[40%]'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="user icon sample" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{ user.nombreCompleto }</div>
                        <div className="text-sm opacity-50">Colombia</div>
                    </div>
                </div>
            </td>
            <td className='w-[40%]'>
                { user.email }
            </td>
            <td className="w-full">
                <div className='w-full h-full flex gap-4 items-center'>
                    <div className={`w-8 h-8 ${user.estado ? "bg-green-700": "bg-red-500" } rounded-full`}></div>
                    <p>{ user.estado ? "Activo" : "Incativo" }</p>
                </div>
            </td>
        </tr>
    );
}

export default UserTableRow;
