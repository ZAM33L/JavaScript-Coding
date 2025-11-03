function topSecret(str) {
  // decode using Caesar cipher (shift back by 3)
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // A–Z
    if (code >= 65 && code <= 90) {
      decoded += String.fromCharCode(((code - 65 - 3 + 26) % 26) + 65);
    }
    // a–z
    else if (code >= 97 && code <= 122) {
      decoded += String.fromCharCode(((code - 97 - 3 + 26) % 26) + 97);
    }
    // other characters unchanged
    else {
      decoded += str[i];
    }
  }

  return decoded;
}

// ↓↓↓ these must be declared in global scope ↓↓↓

// question1: The top secret file number is...
answer1 = "2887";

// question2: Super agent's name is...
answer2 = "DJqqmn";

// question3: He stole the treasure is...
answer3 = "Banana peel";

