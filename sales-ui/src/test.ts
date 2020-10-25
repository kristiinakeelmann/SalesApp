import {getChangeText} from "./app/bank-note-util";

it('gives back string of one coin', () => {
    expect(getChangeText(5)).toEqual(['5c x 1']);
});

it('gives back string of one note', () => {
    expect(getChangeText(500)).toEqual(['5€ x 1']);
});

it('gives back string of several coins', () => {
    expect(getChangeText(12)).toEqual(['10c x 1', '2c x 1']);
});

it('gives back string of several same notes', () => {
    expect(getChangeText(400)).toEqual(['2€ x 2']);
});

it('gives back string of several different notes', () => {
    expect(getChangeText(7200)).toEqual(['50€ x 1', '20€ x 1', '2€ x 1']);
});