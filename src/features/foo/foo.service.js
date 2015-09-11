/**
 * Created by Umayr Shahid on 9/11/2015.
 */

export default class RandomNames {
    constructor() {
        this.names = ['John', 'Elisa', 'Mark', 'Annie'];
    }

    getName() {
        const totalNames = this.names.length;
        const rand = Math.floor(Math.random() * totalNames);
        return this.names[rand];
    }
}