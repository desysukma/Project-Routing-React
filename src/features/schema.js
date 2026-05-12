import {z} from "zod"

export const DestinasiSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1, "Title required"),
    completed: z.boolean().default(false),
})

export const CreateDestinasiSchema = DestinasiSchema.omit({id: true})
