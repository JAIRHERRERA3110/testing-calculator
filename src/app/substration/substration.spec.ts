import {substration} from "./substration";

describe ('addition unit test', () => {
 

    it('should add 3-2=1',() =>{

      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = substration(3,-2);
      //Assert  
        expect (result).toBe(1);
    })
    
    it(' should add 0-5=-5 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = substration(0,-5);
            // Asset
            expect (result).toBe(-5);
        })
    it(' should add 8.5-2.3=6.2 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = substration (8.5,-2.3);
            // Asset
            expect (result).toBe(6.2);
        })    
    it(' should add 5.0+5.0=10.0',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = substration(5.0,5.0);
            // Asset
            expect (result).toBe(10.0);
        })     
})
