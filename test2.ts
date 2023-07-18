import {withSqliteForeignKeysOff} from "sequelize/types/dialects/sqlite/sqlite-utils";

let myArr: {
    start: {
        connect:""
    },
    connect: {
        in: 'start'
            out: 'message'
    }
}
function countSentMessages(actions: Array<string>): void {
    let myArr: Array<string> = ['start','connect','message','end']
    let count: number = 0;
    if(actions.length > 3 && actions.length < 50) {
        actions.forEach(function (item, index, array) {
            const arrayElemIndex: number = myArr.indexOf(item)
            if(actions[index - 1] === myArr[arrayElemIndex - 1] || myArr[arrayElemIndex - 1] === undefined){
                if(item === 'message'){
                    count++
                    console.log(item)
                }
            }else throw(Error)
        })
    } else throw new Error('Invalid Array Length')
}
countSentMessages(['start','connect','message','end','start'])
