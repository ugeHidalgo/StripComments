describe('Kata', function() {

  beforeEach(function() {   
  });

  it('should be able to test', function() {
    expect(true).toBeTruthy();
  });

  it('should return same string when no markers', function() {
    var result = solution('apples, pears and bananas\ngrapes\nbananas apples', []);

    expect(result).toEqual('apples, pears and bananas\ngrapes\nbananas apples')
  });

  it('should return same string when markers is not an array', function() {
    var result = solution('apples, pears and bananas\ngrapes\nbananas apples', 3 );

    expect(result).toEqual('apples, pears and bananas\ngrapes\nbananas apples')
  });

  describe ('when one marker',function(){

    describe ('and one line',function(){

        it('should return the same string when the marker is not in the string', function() {
          var result = solution('apples, pears * and bananas', ["#"]);

          expect(result).toEqual('apples, pears * and bananas')
        });

        it('should remove chars after marker in a single line string', function() {
          var result = solution('apples, pears# and bananas', ["#"]);

          expect(result).toEqual('apples, pears')
        });

      /*  it('should remove chars after marker in a single line string including white spaces', function() {
          var result = solution('apples, pears    # and bananas', ["#"]);

          expect(result).toEqual('apples, pears')
        }); 

        it('should remove chars after marker in a single line string including white spaces only at the end', function() {
          var result = solution('   apples, pears    # and bananas', ["#"]);

          expect(result).toEqual('   apples, pears')
        }); */
    });

    describe ('and more than one line',function(){

        it('should return the same string when the marker is not in any of the two strings', function() {
          var result = solution('apples, pears \nlemon * and bananas', ["#"]);

          expect(result).toEqual('apples, pears \nlemon * and bananas')
        });

        it('should return the same string when the marker is not in any of the three strings', function() {
          var result = solution('apples, pears \nlemon * and \nbananas', ["#"]);

          expect(result).toEqual('apples, pears \nlemon * and \nbananas')
        });

        it('should remove chars after marker in each line string', function() {
          var result = solution('apples, pears # lemons \nand bananas', ["#"]);

          expect(result).toEqual('apples, pears \nand bananas')
        });

        it('should be able to test case exposed in kata with one marker only', function() {
          var result = solution('apples, pears # and bananas\ngrapes\nbananas apples', ["#"]);

          expect(result).toEqual('apples, pears \ngrapes\nbananas apples')
      }); 
    });
  });
  
/*
  it('should be able to test case exposed in kata', function() {
    var result = solution('apples, pears # and bananas\ngrapes\nbananas !apples', ["#", "!"]);
    expect(result).toEqual('apples, pears\ngrapes\nbananas')
  });  
  */
    describe ('when more than one marker',function(){
        describe ('and one line',function(){

        });

        describe ('and more than one line',function(){
          
        });
    });


    describe ('getLines ',function(){

      it('should return 1 line for a string without "\\n"', function() {
        var result = getLines('apples, pears and bananas');

        expect(result[0]).toEqual('apples, pears and bananas');
        expect(result.length).toBe(1);
      });

      it('should return 2 lines for a string with one "\\n"', function() {
        var result = getLines('apples, pears \nand bananas');

        expect(result[0]).toEqual('apples, pears ');
        expect(result[1]).toEqual('and bananas');
        expect(result.length).toBe(2);
      });

      it('should return 3 lines for a string with two "\\n"', function() {
        var result = getLines('apples, pears \nbananas, pinneapples \nand something more ');

        expect(result[0]).toEqual('apples, pears ');
        expect(result[1]).toEqual('bananas, pinneapples ');
        expect(result[2]).toEqual('and something more ');
        expect(result.length).toBe(3);
      });
    });
});