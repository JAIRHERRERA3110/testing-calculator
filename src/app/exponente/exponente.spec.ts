import {exponente} from "./exponente";

describe ('exponentes unit test', () => {
    

    it('should add 2 2=4',() =>{

      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = exponente(2,2);
      //Assert  
        expect (result).toBe(4);
    })
    
    it(' should add 0*2=0 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = exponente(2,-2);
            // Asset
            expect (result).toBe(0.25);
        })
    it(' should add 3.0*0.5=1.5 ',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = exponente (3.0,0.1416);
            // Asset
            expect (result).toBe(1.16831612187366);
        })    
    it(' should add 2.0*1.5=3.0',() =>{
            
            // Arrange
            let result = 0;
            // Act
            result = exponente(5,4);
            // Asset
            expect (result).toBe(625);
        })     
})