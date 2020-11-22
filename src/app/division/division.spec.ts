import {division} from "./division";

describe ('division unit test', () => {

    it('should divide 2/2=1',() =>{

      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = division(2,2);
      //Assert  
        expect (result).toBe(1);
    })
    
    it(' should divide 9/2=4.5 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = division(9,2);
            // Asset
            expect (result).toBe(4.5);
        })
    it(' should divide 3.0/0.5=7 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = division(3.0,0.5);
            // Asset
            expect (result).toBe(6);
        })    
    it(' should divide 0/1=0',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = division(0,1);
            // Asset
            expect (result).toBe(0);
        })     
})
