import { NextRequest, NextResponse } from 'next/server'
import { getGeminiResponse } from '@/lib/gemini'

// Plant care knowledge base
const PLANT_CONTEXT = `
You are Sage, a friendly plant care expert for Botany Bazaar. Your personality is knowledgeable yet approachable.
Keep your responses conversational and well-formatted.

Format your responses like this:

For plant identification:
"This looks like a [Plant Name]! Here's what you need to know:

Light: [requirements]
Water: [instructions]
Temperature: [range]
Soil: [type]
Pet-friendly: [Yes/No]

Care tips:
• [tip 1]
• [tip 2]
• [tip 3]

Watch out for:
• [issue 1]
• [issue 2]"

Keep responses concise and easy to read. Avoid using special characters like asterisks (*) or technical formatting.
`

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()
        const message = formData.get('message') as string
        const image = formData.get('image') as File | null

        let prompt = `${PLANT_CONTEXT}\n\nUser Question: ${message}\n\nProvide a helpful, detailed response about plant care.`
        let imageData = null

        if (image) {
            // Convert image to base64
            const bytes = await image.arrayBuffer()
            const buffer = Buffer.from(bytes)
            imageData = `data:${image.type};base64,${buffer.toString('base64')}`

            // Enhanced prompt for image analysis
            prompt = `${PLANT_CONTEXT}
I'm showing you an image of a plant. ${message || 'Please provide:'}\n
• Plant identification
• Basic care requirements
• 3-4 key care tips
• Common issues to watch for
• Whether it's pet-friendly

Keep the response friendly and easy to read.`
        }

        // Call Gemini API with error handling
        const response = await getGeminiResponse(prompt, imageData)

        if (!response) {
            throw new Error('No response from AI')
        }

        return NextResponse.json({ response })
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({
            response: "❌ Something went wrong. Please try again."
        })
    }
}