import {addition} from "./addition";

describe ('addition unit test', () => {


    it('s should add 2+2=4',() =>{

      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = addition(0,-2);
      //Assert  
        expect (result).toBe(-2);
    })
    
    xit(' should add 5+5=10 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = addition(0,1);
            // Asset
            expect (result).toBe(2);
        })
    xit(' should add 8-2=6 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = addition(0,1);
            // Asset
            expect (result).toBe(2);
        })    
    xit(' should add 5.3+5.3=10.6',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = addition(0,1);
            // Asset
            expect (result).toBe(2);
        })     
})
