describe("Contatos Test", function(){
    describe('when I call Lista', function(){
        beforeEach(module('app.services'));
        it('returns Defined', inject(function(Contatos){
            expect(Contatos).toBeDefined();
        }))
    })
});
