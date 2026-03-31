export const prompt = `
Analyze the provided food image and identify all visible food items.
For each item:

Assign a clear, specific name (e.g., “grilled chicken breast” instead of just “chicken”)
Estimate the portion size using common units (grams, ml, pieces, or cups)
Provide a best-effort nutritional estimate based on the portion size

Return the result strictly in valid JSON format with the following structure:
{
  "items": [
    {
      "food_name": "string",
      "portion_size": "string (e.g., 150g, 1 cup, 2 pieces)",
      "calories": number,
      "protein_g": number,
      "carbs_g": number,
      "fat_g": number
    }
  ],
  "total": {
    "calories": number,
    "protein_g": number,
    "carbs_g": number,
    "fat_g": number
  }
}
Be as accurate and realistic as possible with portion estimation based on visual cues
If uncertain, make a reasonable assumption and avoid leaving fields empty
Do not include any text outside the JSON response
Ensure totals equal the sum of all items
`;
