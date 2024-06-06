

const getIndexElement = <T extends string|number>(array:T[], arrayIndex:number):T => { return array[arrayIndex] }

const numbers = [1, 2, 3, 4, 5]
getIndexElement(numbers, 1)

const names = ['a', 'b', 'c']
getIndexElement(names, 1)



