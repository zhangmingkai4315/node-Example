var superagent=require('superagent');
var expect=require('expect')
describe('homepage',function(){
	it("Should return response with 200",function(){
		superagent.get('http://localhost:3000')
				  .end(function(res){
				  	expect(res.status).to.equal(200);
				  	done();
				  });
	});
});

var testArray;
before(function(){
	testArray=['a','b','c'];
})
describe('ArrayTest',function(){
	it('Should return a array include a ',function(){
		expect(testArray).toInclude('a');
	});
	it('Should return a string include abc',function(){
		expect(testArray.join('')).toInclude('abc');
	});
})