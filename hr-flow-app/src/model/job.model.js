export class Job {
    constructor(data, index) {
        this.id = data.id;
        this.name = data.name;
        this.created_date = data.created_at;
        this.key = data.key;
        this.url = data.url;
        this.picture = data.picture;
        this.summary = data.summary;
        this.location = data.location.text;
        this.description = data.section?.description;
        this.skills = data.skills;
        this.category = this.getTagInfo(data.tags, 'category');
        this.company = this.getTagInfo(data.tags, 'Company');
        this.skills = data.skills? this.getSkillsData(data.skills):'';
        this.jobType = this.getTagInfo(data.tags, 'type');
        this.language = data.languages.map(ln => ln.name).join(' | ')
        this.creationDate =`${new Date(data.created_at).getDate()}/${new Date(data.created_at).getMonth() + 1}/${new Date(data.created_at).getFullYear()}`;
    }

    getTagInfo(tags, type) {
        const tag = tags.find(tag => tag.name == type);
        const tagValue = tag ? tag.value : '';

        return tagValue;
    }

    getSkillsData(skills) {
        const skillsString = skills.map(skill => skill.name).join(' | ');

        return skillsString
    }
}

