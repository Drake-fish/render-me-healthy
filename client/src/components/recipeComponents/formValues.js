export const formValues = [
	{ name: 'title', placeholder: 'Recipe Title' },
	{ name: 'image', placeholder: 'Image Url' },
	{ name: 'prepTime', placeholder: 'Prep Time' },
	{ name: 'cookTime', placeholder: 'Cook Time' },
	{
		name: 'recipeCat',
		options: [
			{ option: 'Main Dish', value: 'mainDish' },
			{ option: 'Salads', value: 'salads' },
			{ option: 'Wraps', value: 'wraps' },
			{ option: 'Skillet Meals', value: 'skilletMeals' },
			{ option: 'Stir-Fries', value: 'stirFries' },
			{ option: 'Sautes', value: 'sautes' },
			{ option: 'Sheet Pan Suppers', value: 'sheetPanSuppers' },
			{ option: 'Soups', value: 'soups' },
			{ option: 'Stews', value: 'stews' },
			{ option: 'Noodle Bowls', value: 'noodleBowls' },
			{ option: 'Stir-and-Go Slow cooker', value: 'slowcooker' },
			{ option: 'Sides', value: 'sides' }
		]
	}
];
export const ingredientValues = [
	{ name: 'commonName', placeholder: 'Common name' },
	{ name: 'amount', placeholder: 'Amount (decimal)' },
	{
		name: 'measure',
		options: [
			{ option: 'Tablespoon', value: 'tablespoon' },
			{ option: 'Teaspoon', value: 'teaspoon' },
			{ option: 'Cup', value: 'cup' },
			{ option: 'Small', value: 'small' },
			{ option: 'Medium', value: 'medium' },
			{ option: 'Large', value: 'large' },
			{ option: 'Bunch', value: 'bunch' },
			{ option: 'Ounces', value: 'ounces' }
		]
	},
	{
		name: 'category',
		options: [
			{ option: 'Vegetable', value: 'vegetable' },
			{ option: 'Meat', value: 'meat' },
			{ option: 'Seasoning', value: 'seasoning' },
			{ option: 'Canned Food', value: 'cannedFood' },
			{ option: 'Fruit', value: 'fruit' },
			{ option: 'Dairy', value: 'dairy' },
			{ option: 'Oil', value: 'oil' },
			{ option: 'Frozen', value: 'frozen' },
			{ option: 'Miscellaneous', value: 'miscellaneous' }
		]
	}
];
