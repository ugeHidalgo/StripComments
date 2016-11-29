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

        it('should remove chars after marker in a single line string including white spaces', function() {
            var result = solution('apples, pears    # and bananas', ["#"]);

            expect(result).toEqual('apples, pears')
          }); 
      });

      describe ('and more than one line',function(){

          it('should return the same string when the marker is not in any of the two strings', function() {
            var result = solution('apples, pears \nlemon * and bananas', ["#"]);

            expect(result).toEqual('apples, pears\nlemon * and bananas')
          });

          it('should return the same string when the marker is not in any of the three strings', function() {
            var result = solution('apples, pears\nlemon * and\nbananas', ["#"]);

            expect(result).toEqual('apples, pears\nlemon * and\nbananas')
          });

          it('should remove chars after marker in each line string', function() {
            var result = solution('apples, pears # lemons\nand bananas', ["#"]);

            expect(result).toEqual('apples, pears\nand bananas')
          });

          it('should be able to test case exposed in kata with one marker only', function() {
            var result = solution('apples, pears # and bananas\ngrapes\nbananas apples', ["#"]);

            expect(result).toEqual('apples, pears\ngrapes\nbananas apples')
        }); 
      });
    });
      
  
    describe ('when more than one marker',function() {

        describe ('and one line',function(){
            it('should return the same string when the markers are not in the string', function() {
              var result = solution('apples, pears * and bananas', ["#","!"]);

              expect(result).toEqual('apples, pears * and bananas')
            });

            it('should remove chars after markers', function() {
              var result = solution('apples, pears # lemons and bananas! with orange', ["#","!"]);

              expect(result).toEqual('apples, pears')
            });
        });

        describe ('and more than one line',function() {
            it('should return the same string when the markers are not in any of the two strings', function() {
              var result = solution('apples, pears\nlemon * and bananas', ["#","!"]);

              expect(result).toEqual('apples, pears\nlemon * and bananas')
            });

            it('should return the same string when the markers are not in any of the three strings', function() {
              var result = solution('apples, pears\nlemon * and\nbananas', ["#","!"]);

              expect(result).toEqual('apples, pears\nlemon * and\nbananas')
            });

            it('should remove chars after markers in each line string: one marker per line', function() {
              var result = solution('apples, pears # lemons\nand bananas\nand pinneapples !with orange', ["#","!"]);

              expect(result).toEqual('apples, pears\nand bananas\nand pinneapples')
            });

            it('should be able to test case exposed in kata', function() {
              var result = solution('apples, pears # and bananas\ngrapes\nbananas !apples', ["#", "!"]);
              expect(result).toEqual('apples, pears\ngrapes\nbananas')
            });
        });
    });
});