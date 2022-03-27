const familyMember = {};

const addFamilyMember = member => {
    if(member in familyMember){
        familyMember[member] = familyMember[member] + 1;
    }
    else{
        familyMember[member] = 1;
    }
    console.log(familyMember);
}