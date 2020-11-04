const AlphabetArray = nameArray => {
	let children = nameArray;

	var alphabet = [];

	if (children != null && children.length > 0) {
		//add the first character from first child because it is definately not already added
		alphabet.push(children[0].name.charAt(0).toUpperCase());
		for (var i = 0; i < children.length; i++) {
			if (
				children[i].name.charAt(0).toUpperCase() !==
				alphabet[alphabet.length - 1].toUpperCase()
			) {
				alphabet.push(children[i].name.charAt(0).toUpperCase());
			}
		}
    }
	return alphabet;
};
export default AlphabetArray;

//         alphaItemList.push(
//             name = "alpha",
//             label = alpha
//         ),
//             {
//             ));
//                     </div>
//                 ) : null;
//             })}
//         </div>
//     ))}

//}
