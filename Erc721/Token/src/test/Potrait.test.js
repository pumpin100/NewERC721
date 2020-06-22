const Potrait = artifacts.require('./Potrait.sol')

require('chai')   
    .use(require('chai -as-promised'))
    .should()




contract('Potrait', (accounts)=> {
    let contract
    
  before(async () => {
      contact = await Potrait.deployed()
  })

describe('minting', async () => {
    it('creates new Token', async ())
})






describe('deployment', async () => {
    it('deploys successfully', async () => {
    contract = await Potrait.deployed()
    const address = contract.address
    console.log(address)
    assert.notEqual(address,'')
    assert.notEqual(address, 0x0)
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)


    })

  it('has a name', async () => {
      const name = await contract.name()
      assert.equal(name, 'Potrait')
  })

  it('has a symbol', async () => {
    const symbol = await contract.symbol()
    assert.equal(symbol, 'POTRAIT')
})

  
})
})