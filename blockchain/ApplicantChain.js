const Applicant = require('./ApplicantClass')
const blockchain = require('./blockchain')

class ApplicantChain {
    constructor() {
        this.ApplicantChain = []
        console.log("Application Chain Instanitated")
    }

    getLength() {
        return this.ApplicantChain.length
    }

    getApplicantChain() {
        return this.ApplicantChain
    }

    addnewBlockChain() {
        const chain = new blockchain.Blockchain()
        const index = this.ApplicantChain.length
        this.ApplicantChain.push(chain)
        return index
    }

    addApplicant(phaseID, candidateId, vaccineID) {
        while(this.ApplicantChain.length <= phaseID) {
            this.addnewBlockChain()
        }
        if(phaseID >= this.ApplicantChain.length) {
            console.log("Invalid phase Id")
            return null
        }
        blk = this.ApplicantChain.getSpecificBlockChain(phaseID)
        for(var i=1; i<blk.length; i++) {
            if(blk[i].ApplicantData.vaccineID == vaccineID) {
                return false
            }
        }

        const ApplicantData = new Applicant.Applicant(phaseID, candidateId, vaccineID)
        const newBlock = this.ApplicantChain[phaseID].generateNextBlock(ApplicantData)
        return this.ApplicantChain[phaseID].addBlock(newBlock)
    }

    getSpecificBlockChain(index) {
        if(index >= this.ApplicantChain.length) {
            console.log("Invalid phase Id")
            return null
        }

        return this.ApplicantChain[index]
    }

    checkApplicant(phaseID, candidateId) {
        if(index >= this.ApplicantChain.length) {
            console.log("Invalid phase Id")
            return null
        }

        var containCandidateId = false;

        const blockchain = this.getSpecificBlockChain(phaseID).getBlockchain();
        for(var i = 1; i < blockchain.length; i++) {
            const savedCandidateId = blockchain[i].ApplicantData.candidateId
            if(candidateId == savedCandidateId) {
                containCandidateId = true;
            }
        }

        return containCandidateId;
    }

    countApplicants(index) {
        if(index >= this.ApplicantChain.length) {
            console.log("Invalid phase Id")
            return null
        }

        const blockchain = this.getSpecificBlockChain(index).getBlockchain()
        const ApplicantCount = new Map()
        for(var i=1; i<blockchain.length; i++) {
            const candidateId = blockchain[i].ApplicantData.candidateId
            if(ApplicantCount.has(candidateId) == true) {
                ApplicantCount.set(candidateId, ApplicantCount.get(candidateId)+1)
            }else {
                ApplicantCount.set(candidateId, 1)
            }
        }
        const jsonApplicantCount = []
        ApplicantCount.forEach( (value, key) => {
            jsonApplicantCount.push({
                "candidateId": key,
                "ApplicantCount": value
            })
        })
        console.log(jsonApplicantCount)
        return jsonApplicantCount
    }
}

// ApplicantChain = new ApplicantChain()
// ApplicantChain.addnewBlockChain()
// ApplicantChain.addApplicant(0)
// ApplicantChain.addnewBlockChain()
// ApplicantChain.addApplicant(0)
// ApplicantChain.addApplicant(0)
// ApplicantChain.addApplicant(1)
// console.log(ApplicantChain.getSpecificBlockChain(0))
// console.log(ApplicantChain.getSpecificBlockChain(1))
// console.log(ApplicantChain.ApplicantChain)
// console.log(ApplicantChain.countApplicants(0))

module.exports = {
	ApplicantChain: ApplicantChain
}