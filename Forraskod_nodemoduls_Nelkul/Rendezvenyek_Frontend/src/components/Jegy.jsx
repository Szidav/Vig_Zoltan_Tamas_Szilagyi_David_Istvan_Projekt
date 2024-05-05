

function Jegy({rendezveny}) {


    return (
        <tbody>
            <tr>
                <td class="py-4">
                    <div class="flex items-center">
                        <img class="h-16 w-16 mr-4" src={rendezveny.kep} alt="Product image" />
                        <span class="font-semibold">{rendezveny.nev}</span>
                    </div>
                </td>
                <td class="py-4">Ár</td>
                <td class="py-4">
                    <div class="flex items-center">
                        <button  class="border rounded-md py-2 px-4 mr-2">-</button>
                        <span class="text-center w-8">1</span>
                        <button  class="border rounded-md py-2 px-4 ml-2">+</button>
                    </div>
                </td>
                <td class="py-4">Összeg</td>
            </tr>
        </tbody>
    )
}

export default Jegy