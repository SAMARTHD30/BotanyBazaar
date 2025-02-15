import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function getGeminiResponse(prompt: string, image?: string) {
    try {
        // Use gemini-pro for text-only and gemini-pro-vision for images
        const modelName = image ? "gemini-pro-vision" : "gemini-pro"
        const model = genAI.getGenerativeModel({ model: modelName })

        if (image) {
            try {
                // For image analysis
                const result = await model.generateContent([
                    prompt,
                    {
                        inlineData: {
                            data: image.split(',')[1], // Remove the data URL prefix
                            mimeType: "image/jpeg"
                        }
                    }
                ])
                const response = await result.response
                return response.text()
            } catch (imageError) {
                console.error('Image processing error:', imageError)
                return "❌ Unable to analyze image. Please try another photo."
            }
        } else {
            // For text-only queries
            const result = await model.generateContent(prompt)
            const response = await result.response
            return response.text()
        }
    } catch (error) {
        console.error('Gemini API Error:', error)
        return "🤔 I'm having trouble right now. Please try again."
    }
}