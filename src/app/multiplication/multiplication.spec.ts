import {multiplication} from "./multiplication";

describe ('multiplicacion unit test', () => {
    

    it('should add 2*2=4',() =>{

      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = multiplication(2,2);
      //Assert  
        expect (result).toBe(4);
    })
    
    it(' should add 0*2=0 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = multiplication(0,2);
            // Asset
            expect (result).toBe(0);
        })
    it(' should add 3.0*0.5=1.5 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = multiplication (3.0,0.5);
            // Asset
            expect (result).toBe(1.5);
        })    
    it(' should add 2.0*1.5=3.0',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = multiplication(2.0,1.5);
            // Asset
            expect (result).toBe(3);
        })     
})