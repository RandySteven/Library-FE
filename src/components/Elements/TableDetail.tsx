import { TableDetailProps } from "@/interfaces/props/TableDetail";

export const TableDetail = (props : TableDetailProps) => {
    return <>
        <tr className="border border-2 border-black px-2 py-2">
            <th className="border border-2 border-black px-2">
                {props.keyName}
            </th>
            <td className="border border-2 border-black px-2">
                {props.value}
            </td>
        </tr>
    </>
}