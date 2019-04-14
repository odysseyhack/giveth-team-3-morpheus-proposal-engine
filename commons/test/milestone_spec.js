const Milestone = require('Embark/contracts/Milestone');
const ConvictionVoting = require('Embark/contracts/ConvictionVoting');

// Parameters
const reserveRatio = 142857;  // Kappa (~ 6)
const theta = 350000;         // 35% in ppm
const p0 =  1;                // Price of internal token in external tokens.
const initialRaise = 300000;  // Raise amount in external tokens.
const friction = 20000;       // 2% in ppm
const gasPrice = 15000000000; // 15 gwei
const duration = 3024000000000000; // ~5 weeks.
const minExternalContibution = 100000;

let owner = "0xFE5481d521Cf54306dba9043b4aeFe65f2A8c89B";
let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  deployment: {
    accounts: [{
      mnemonic: "dismiss fee squeeze symbol already forest rent sphere crack crane smile hurdle",
      balance: "100 ether"
    }]
  },
  contracts: {
    CommonsToken: {
      args: ['$ERC20', reserveRatio, gasPrice, theta, p0, initialRaise, '$FundingPoolMock', friction, duration, minExternalContibution]
    },
    ConvictionVoting: {
      track: false,
      args: ['$CommonsToken']
    },
    BondingCurve: {
      deploy: false
    },
    ERC20Mintable: {
      args: [owner]
    },
    ERC20: {},
    FundingPoolMock: {},
    MinterRole: {
      args: [owner]
    },
    Commons: {
      deploy: false
    },
    ERC20BondingToken: {
      deploy: false
    },
    Milestone: {
      track: false,
      args: [owner, 10]
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("Milestone", function () {
  this.timeout(0);

  describe('Setup', function () {
    it("should set values in constructor", async function () {
      let mm = await Milestone.methods.milestoneManager().call();
      assert.strictEqual(mm, owner);
      let reviewer = await Milestone.methods.reviewer().call();
      assert.strictEqual(reviewer, owner);
      let receiver = await Milestone.methods.receiver().call();
      assert.strictEqual(receiver, owner);
    });

    it("should be unfunded", async function() {
      let funded = await Milestone.methods.isFunded().call();
      assert.equal(funded, false);
    });

    it("should be unfinished", async function() {
      let done = await Milestone.methods.done().call();
      assert.equal(done, false);
    });

    it("should not be reviewed", async function() {
      let reviewed = await Milestone.methods.reviewed().call();
      assert.equal(reviewed, false);
    });

    it("should not be paid", async function() {
      let paid = await Milestone.methods.paid().call();
      assert.equal(paid, false);
    });
  });

  describe('Commons Proposal', function () {
    it("should submit the milestone as a proposal to a Commons", async function() {
      await Milestone.methods.proposeToCommons(ConvictionVoting.address).send();
      let proposal = await ConvictionVoting.methods.getProposal(1).call();
      // Check proposal address
      assert.equal(proposal[0], Milestone.address);
      // Check proposal amount
      let amountRequested = await Milestone.methods.getAskAmount().call();
      assert.equal(amountRequested, proposal[1]);
    });
  });

  describe('Receiver workflow', function () {
    it("should allow the receiver to mark a milestone as done", async function() {
      await Milestone.methods.markAsDone(true).send().then((result) => {
          assert(result.events.MilestoneReviewRequested);
      });
      let done = await Milestone.methods.done().call();
      assert(done);
    });

    it("should allow the receiver to mark a milestone as NOT done", async function() {
      let done = await Milestone.methods.done().call();
      assert(done);

      await Milestone.methods.markAsDone(false).send();

      done = await Milestone.methods.done().call();
      assert(!done);
    });

    /*
    it("should allow the receiver to request and receive a payout", async function() {

    });
    */
  });

  describe('Donating', function () {

    it("should cause the milestone to be funded when donations match request", async function() {
      await Milestone.methods.fakeDonate(ConvictionVoting.address).send({ 'value': web3.utils.toWei("9", "ether") }).then((result) => {
          assert(result.events.DonationReceived);
          assert(result.events.MilestoneFunded);
      });
    });
  });

  describe('Reviewing', function () {
    it("should submit a completed milestone for review", async function() {
      await Milestone.methods.markAsDone(true).send().then((result) => {
          assert(result.events.MilestoneReviewRequested);
      });
    });

    it("should allow the reviewer to accept a finished milestone", async function() {
      await Milestone.methods.approve().send().then((result) => {
          assert(result.events.MilestoneReviewRequestApproved);
      });
    });

    /*
    it("should allow the milestoneManager to accept a milestone", async function() {

    });

    it("should allow a reviewer to reject a milestone", async function() {

    });

    it("should allow the milestoneManager to reject a milestone", async function() {

    });

    it("should allow a reviewer to reject a milestone after positive review", async function() {

    });

    it("should disallow review before work is finished", async function() {

    });

    it("should disallow review after payout", async function() {

    });
    */
  });
});

