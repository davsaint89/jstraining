const fs=require('fs');
const data=fs.readFileSync('sample.json', 'utf8');
const sample=JSON.parse(data);

const transform = (data) => {

    // Provide Solution Code Here
    data['boards'].map(
        board => {
            'boardId':board.boardID,
            
        }
    )
    
};

transform(sample)

