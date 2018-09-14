export const formValues = [
	{ name: 'title', type: 'text', placeholder: 'Recipe Title' },
	{ name: 'image', type: 'text', placeholder: 'Image Url' },
	{ name: 'prepTime', type: 'text', placeholder: 'Prep Time' },
	{ name: 'cookTime', type: 'text', placeholder: 'Cook Time' },
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
	{ name: 'commonName', type: 'text', placeholder: 'Common name' },
	{ name: 'description', type: 'text', placeholder: 'Ingredient Attributes' },
	{
		name: 'ingredientFor',
		type: 'text',
		placeholder: 'What is the ingredient for?'
	},
	{ name: 'amount', type: 'number', placeholder: 'Amount (decimal)' },

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
			{ option: 'Ounces', value: 'ounces' },
			{ option: 'Piece', value: 'piece' },
			{ option: 'Package', value: 'package' },
			{ option: 'Clove', value: 'clove' },
			{ option: 'Can', value: 'can' }
		]
	},
	{
		name: 'category',
		options: [
			{ option: 'Canned Food', value: 'cannedFood' },
			{ option: 'Dairy', value: 'dairy' },
			{ option: 'Frozen', value: 'frozen' },
			{ option: 'Fruit', value: 'fruit' },
			{ option: 'Meat', value: 'meat' },
			{ option: 'Miscellaneous', value: 'miscellaneous' },
			{ option: 'Oil', value: 'oil' },
			{ option: 'Seasoning', value: 'seasoning' },
			{ option: 'Sauce', value: 'sauce' },
			{ option: 'Vegetable', value: 'vegetable' }
		]
	}
];
