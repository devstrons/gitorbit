export function removeDuplicates(arr)
{
    const obj = {}
    for (const item of arr)
    { // for each element in the array
        obj[ item.id ] = item // removing dulpicate items
    }
    return Object.values(obj)
}
