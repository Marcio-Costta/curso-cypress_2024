/// <reference types="cypress" />

it('Equality' , () =>{
    const a = 1;

    expect(a).equal(1)
    expect(a , 'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect('a').not.to.be.equal('b')
})

it('Truthy' , () =>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality' , () =>{
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).to.be.deep.equal({a: 1, b:2});
    expect(obj).eql({a:1, b:2});
    expect(obj).not.to.be.empty;
})

it('Arrays' , () =>{
    const arr = [1, 2, 3];
    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.include.members
    expect(arr).to.be.not.empty;
})

it('Types' , () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
})

it('String' , () => {
    const str = 'String de Teste';

    expect(str).to.be.equal('String de Teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
})

it('numbers' , () => {
    const num = 4;
    const floatnumber = 5.2123;

    expect(num).to.be.equal(4);
    expect(num).to.be.above(2);
    expect(num).to.be.below(6);
    expect(floatnumber).to.be.closeTo(5.2 , 0.1);
})