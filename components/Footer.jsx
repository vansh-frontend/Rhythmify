export default function Footer() {
    return (
        <footer className="py-10 mt-10 text-center">
            <p className="text-sm">Made with ❤️ by <a className="hover:underline hover:text-primary" href="https://github.com/vansh-frontend">vansh dhalor</a><span className="text-primary">.</span></p>
            <ul className="flex items-center justify-center gap-1 mt-1">
                <li><a className="p-1 px-2 text-xs rounded-full bg-secondary hover:bg-primary hover:text-white" href="https://www.instagram.com/_vansh_.19?igsh=MTEzOTZtMmg2cGFsNg==" target="_blank">Instagram</a></li>
                <li><a className="p-1 px-2 text-xs rounded-full bg-secondary hover:bg-primary hover:text-white" href="https://github.com/vansh-frontend" target="_blank">Github</a></li>
            </ul>
        </footer>
    )
}