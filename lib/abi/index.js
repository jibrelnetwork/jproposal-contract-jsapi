'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Exposes ABI array for voting contract interface
 * @author Ivan Violentov <ivan.violentov@jibrel.network>
 */

var Voting = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    name: 'oldOwner',
    type: 'address'
  }, {
    indexed: true,
    name: 'newOwner',
    type: 'address'
  }],
  name: 'OwnerChangedEvent',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'proposalId',
    type: 'uint256'
  }, {
    indexed: false,
    name: 'proposalHash',
    type: 'bytes32'
  }, {
    indexed: false,
    name: 'description',
    type: 'string'
  }, {
    indexed: false,
    name: 'startDate',
    type: 'uint256'
  }, {
    indexed: false,
    name: 'endDate',
    type: 'uint256'
  }],
  name: 'CreateProposalEvent',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'proposalId',
    type: 'uint256'
  }, {
    indexed: false,
    name: 'votedJNT',
    type: 'uint256'
  }, {
    indexed: false,
    name: 'inSupport',
    type: 'bool'
  }],
  name: 'VotedEvent',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'proposalId',
    type: 'uint256'
  }, {
    indexed: false,
    name: 'numberOfVoters',
    type: 'uint256'
  }, {
    indexed: false,
    name: 'tokensInSupport',
    type: 'uint256'
  }, {
    indexed: false,
    name: 'tokensAgainst',
    type: 'uint256'
  }],
  name: 'StopVotingEvent',
  type: 'event'
}, {
  constant: false,
  inputs: [{
    name: '_newOwner',
    type: 'address'
  }],
  name: 'changeOwner',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_newJntViewAddress',
    type: 'address'
  }],
  name: 'setJntVewAddress',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_newJntControllerAddress',
    type: 'address'
  }],
  name: 'setJntControllerAddress',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }],
  name: 'getTotalVotersNumber',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }],
  name: 'getTokensInSupport',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }],
  name: 'getTokensAgainst',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }],
  name: 'getDescription',
  outputs: [{
    name: '',
    type: 'string'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'getProposalsNumber',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'getJntViewAddress',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'getJntControllerAddress',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }],
  name: 'getProposalHash',
  outputs: [{
    name: '',
    type: 'bytes32'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: 'description',
    type: 'string'
  }, {
    name: '_startDate',
    type: 'uint256'
  }, {
    name: '_endDate',
    type: 'uint256'
  }],
  name: 'createProposal',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }, {
    name: '_inSupport',
    type: 'bool'
  }],
  name: 'vote',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }, {
    name: '_inSupport',
    type: 'bool'
  }, {
    name: '_votedJNT',
    type: 'uint256'
  }],
  name: 'vote',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: false,
  inputs: [{
    name: '_proposalId',
    type: 'uint256'
  }],
  name: 'stopVoting',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}];
exports.default = Voting;