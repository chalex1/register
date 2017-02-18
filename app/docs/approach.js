//Подход 1:
person: {
	id: undefined,
	relations: [{		
		person_to_id: undefined,
		reltype_id: undefined
	}],
	ceremonies:[{
		provider_person_id: undefined,
		ceremonyWith: [{
			person_to_id: undefined,
			reltype_id: undefined
		}],
		cername_id: undefined,
		date: undefined
	}]
};
relationType: {
	id: undefined
};
ceremonyName: {
	id: undefined
};


//Подход 2:

person: {
	id: undefined
};

relation: {
	id: undefined,
	person_id: undefined,
	to_person_id: undefined,
	reltype_id: undefined
};

ceremony: {
	id: undefined,
	provider_id: undefined,
	ceremony_name_id: undefined,
	date: undefined
};

ceremonyWith: {
	id: undefined,
	ceremony_id: undefined,
	relation_id: undefined
};

relationType: {
	id: undefined
};

ceremonyName: {
	id: undefined
};