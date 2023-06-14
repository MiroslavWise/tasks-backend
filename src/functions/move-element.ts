export function moveElement(arr: any[], fromIndex: number, toIndex: number) {
        const element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
        return arr;
}

export function insertElement(arr: any[], element: any, index: number) {
        arr.splice(index, 0, element);
        return arr; 
}

export function removeElement(arr: any[], _item: any) {
        return arr.filter(item => item !== _item)
}
