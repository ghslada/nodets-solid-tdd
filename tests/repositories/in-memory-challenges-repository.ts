import { ChallengesRepository } from "../../src/application/repositories/ChallengesRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository{
    public items: Challenge[] = [];

    findById(id: string): Promise<Challenge | null> {

        return new Promise( (resolve, reject) => {
            const Challenge = this.items.find(Challenge => Challenge.id == id);

            Challenge? resolve(Challenge) : reject(null);

        });
        
    }
};