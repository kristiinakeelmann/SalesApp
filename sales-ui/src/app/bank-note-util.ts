function getNotesGivenBackList(backInCents: number): number[] {
    let notes = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000];
    let notesBack = [];
    while (backInCents > 0) {
        let filteredNotes = notes.filter(num => num <= backInCents);
        let nearestNote = Math.max(...filteredNotes);
        notesBack.push(nearestNote);
        backInCents -= nearestNote;
    }
    return notesBack;
}

function getChangeMap(changeList: number[]): Map<number, number> {
    const changeMap = new Map();
    for (let change of changeList) {
        if (changeMap.has(change)) {
            changeMap.set(change, changeMap.get(change) + 1);
        } else {
            changeMap.set(change, 1);
        }
    }
    return changeMap;
}

export function getChangeText(backInCents: number): string[] {
    const changeList = getNotesGivenBackList(backInCents);
    const changeMap = getChangeMap(changeList);
    let changeBackList = [];
    for (let [change, count] of changeMap.entries()) {
        let sign;
        if (change <= 50) {
            sign = 'c';
        } else {
            change = change / 100;
            sign = '€';
        }
        changeBackList.push(change + sign + ' x ' + count);
    }
    return changeBackList;
}