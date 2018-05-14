import should from 'should'
import BigNumber from 'bignumber.js'

import jproposalContractApi from '../index.js'

if (process.env.JSON_PATH == null) {
  throw (new Error('JSON_PATH env variable not found'))
}

const testParams = require(process.env.JSON_PATH)

const voting = jproposalContractApi

const rpcaddr = process.env.RPCADDR || '127.0.0.1'
const rpcport = process.env.RPCPORT || 8545
const contractAddress = testParams.contracts.Voting

describe('Voting API', function() {

  describe('getTokensInSupport', function() {

    it('returns value in support for proposal', function(done) {
      voting.getTokensInSupport({
        rpcaddr,
        rpcport,
        contractAddress,
        proposalId: 1,
      }).then((result) => {
        result.greaterThan(0).should.be.equal(true)
        result.toNumber().should.be.greaterThan(0)

        done()
      }).catch(done)
    })

  }) // getTokensInSupport

  describe('getTokensAgainst', function() {

    it('returns value against of proposal', function(done) {
      voting.getTokensAgainst({
        rpcaddr,
        rpcport,
        contractAddress,
        proposalId: 1,
      }).then((result) => {
        result.greaterThan(0).should.be.equal(true)
        result.toNumber().should.be.greaterThan(0)

        done()
      }).catch(done)
    })

  }) // getTokensAgainst

})
