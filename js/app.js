let familyMember = {};

const addFamilyMember = member => {
    const storeMember = localStorage.getItem('allMembers');
    if(storeMember){
        familyMember = JSON.parse(storeMember);
    }
    if(member in familyMember){
        familyMember[member] = familyMember[member] + 1;
    }
    else{
        familyMember[member] = 1;
    }
    localStorage.setItem('allMembers',JSON.stringify(familyMember));
}