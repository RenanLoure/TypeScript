type VotationOption = {
  numberOfvotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOpitions: VotationOption): void {
    this._votationOptions.push(votationOpitions);
  }

  vote(voteIndex: number): void {
    if (!this._votationOptions[voteIndex]) return;
    this._votationOptions[voteIndex].numberOfvotes += 1;
  }

  get votationOption(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votation: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votation.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votation) {
      console.log(votation.details);
      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.numberOfvotes);
      }
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'TypeScript', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOption({ option: 'Vermelho', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Verde', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Roxo', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Marron', numberOfvotes: 0 });
votation2.vote(0);
votation2.vote(2);
votation2.vote(2);
votation2.vote(1);
votation2.vote(4);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
