export class Hero{
	private name: string;
	private originalName: string;
	private popularity: number; 
	constructor(name, originalName, popularity){
		this.name = name;
		this.originalName = originalName;
		this.popularity = popularity;
	}
}