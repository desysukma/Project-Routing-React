import{
    createDestinasi,
    fetchDestinasi,
    getDestinasiById,
    updateDestinasi,
    deleteDestinasi,
} from "./api";

beforeEach(() => {
    localStorage.clear();
});

describe("Destinasi API", () => {
   test("create destinasi", () => {
        const destinasi = createDestinasi({title: "Test", completed: false});

        expect(destinasi.id).toBeDefined();
        expect(destinasi.title).toBe("Test");
    });

    test("fetches destinasi", () => {
        createDestinasi({ title : "A", completed: false});

        const destinasi = fetchDestinasi();
        expect(destinasi.length).toBe(1);
    });

    test("gets todo by id", () =>{
        const created = createDestinasi({ title: "Find me", completed: false});

        const todo = getDestinasiById(created.id);
        expect(todo.title).toBe("Find me");
    });

    test("update destinasi", () => {
        const created = createDestinasi({title: "Old, completed: false"});

        updateDestinasi(created.id, {title: "New"});

        const updated = getDestinasiById(created.id);
        expect(updated.title).toBe("New");

    });

    test("delete destinasi", () => {
        const created = createDestinasi({title: "Delete me", completed: false});

        deleteDestinasi(created.id);

        const destinasi = fetchDestinasi();
        expect(destinasi.length).toBe(0);
    });

    test("fails validation (Zod)", () => {
        expect(() => createDestinasi({title:"", completed: false})).toThrow();
    });
});