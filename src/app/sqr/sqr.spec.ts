import {sqr} from "./sqr";

describe ('SQR unit test', () => {
    

    it('should compute 2^2=4',() =>{

      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = sqr(2);
      //Assert  
        expect (result).toBe(4);
    })
    
    it(' should add 0^2=0 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = sqr(0);
            // Asset
            expect (result).toBe(0);
        })
    it(' should add 5^2 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = sqr (5);
            // Asset
            expect (result).toBe(25);
        })    
    it(' should add 2^2=4',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = sqr(2);
            // Asset
            expect (result).toBe(4);
        })     
})