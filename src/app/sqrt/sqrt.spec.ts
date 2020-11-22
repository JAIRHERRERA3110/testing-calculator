import {sqrt} from "./sqrt";

describe ('multiplicacion unit test', () => {
    

    it('sqrt compute sqrt [9]=3 ',() =>{

      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = sqrt(9);
      //Assert  
        expect (result).toBe(3);
    })
    
    it(' sqrt compute sqrt [25]=5 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = sqrt(25);
            // Asset
            expect (result).toBe(5);
        })
    it(' sqrt compute sqrt [4]=2 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = sqrt (4);
            // Asset
            expect (result).toBe(2);
        })    
    it(' sqrt compute sqrt [16]=4',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = sqrt(16);
            // Asset
            expect (result).toBe(4);
        })     
})