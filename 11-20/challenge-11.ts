// FIND OUT IF TWO ARMS ARE EQUALLY STRONG

const myArms = {
    left: 15,
    right: 10
}
const myFriendsArms = {
    left: 15,
    right: 10
}

const areEquallyStrong = (arms1 = {left:0, right:0}, arms2 = {left:0, right:0}): boolean => {
    const leftArm1: number = arms1.left;
    const rightArm1: number = arms1.right;
    const leftArm2: number = arms2.left;
    const rightArm2: number = arms2.right;

    if ((leftArm1 === leftArm2 || leftArm1 === rightArm2)  && (rightArm1 === leftArm2 || rightArm1 === rightArm2)) {
        return true;
    } else {
        return false;
    }
}

console.log(areEquallyStrong(myArms, myFriendsArms));
