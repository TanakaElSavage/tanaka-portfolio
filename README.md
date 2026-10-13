# TPD Digital Solutions

A responsive Next.js website for Tanaka P. Dongo's digital-services business.

## Preview

Use Node.js 20.9 or later and npm. In this folder:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Stop with Ctrl+C.

## Build

```bash
npm run build
npm start
```

## Edit

- `src/lib/brand.ts`: business name, phone, email, website URL and social links.
- `src/app/page.tsx`: page content, service descriptions, project descriptions and project links.
- `src/app/globals.css`: colours, typography, layout and responsive rules.
- `src/app/layout.tsx`: page title, description, social previews and favicon metadata.
- `src/components/navigation.tsx`: mobile navigation.
- `src/components/consultation-form.tsx`: enquiry message builder.
- `public/brand/tpd-logo.png`: recreated logo asset from the supplied card.
- `public/`: existing portfolio screenshots and founder image.

## Contact form behaviour

The form validates the visitor's name and brief, then prepares a message for review. The visitor chooses WhatsApp or email and sends it themselves. The website does not save the information, send mail automatically or claim that an enquiry has been delivered. No backend, API key or environment variable is required for this flow.

## Redeploy on the existing Vercel project

Use the illustrated guide in `../Guides/TPD-Redeployment-and-Printing-Guide.pdf`.

1. Open your existing `TanakaElSavage/tanaka-portfolio` checkout. Save unfinished work, pull the production branch, and create a `tpd-redesign` branch.
2. Copy the supplied `src` and `public` folders into your checkout, replacing matching files. Keep `.git` and private environment files.
3. Delete the old `src/app/favicon.ico`, which is not included in this updated project. This avoids retaining the previous default favicon.
4. Optionally replace README.md with this file. Package dependencies and configuration were preserved from the repository snapshot.
5. Run `npm ci` and `npm run build`.
6. Commit and push the redesign branch. Open a pull request and review Vercel's preview deployment.
7. Merge after review. Vercel deploys the connected production branch. Keep the same Vercel project and domain so the printed URL and QR remain valid.

If your own repository has changed since the source snapshot, review the differences before replacing matching files. This download has no Git history or credentials. It has not been pushed or deployed.

## Validation performed

- Next.js production build: passed.
- TypeScript checks in the production build: passed.
- Generated HTML: one main heading; all internal anchor targets resolve; all images have alt attributes; expected phone/email links exist.
- Printed QR decoded successfully to `https://tanaka-portfolio-49qa.vercel.app/#contact`.
- Print PDF and guide were rendered and visually inspected.
- Browser interaction, phone layouts and external project availability have not been verified in a browser. Check the preview on your desktop and Android phone before merging, and scan a physical card proof before bulk printing.

## Content provenance

Updated from repository commit `8818a23a452b8ca803daabe49373557caea869eb`. Existing screenshots and project URLs are retained. The Zengeza 1 project is identified as a paid client project based on the owner's supplied account. No testimonial, sales increase, user count or new performance claim has been invented. DreamBridge is explicitly presented as a prototype.

The logo was recreated with the built-in image-generation tool from the supplied card. The print PDF uses precisely typeset text and a programmatically encoded vector QR. Logo brief: preserve the original angular TPD silhouette and purple-to-blue-to-cyan colours; isolate the mark from the reference on transparency. The final embedded asset is the first generated variant.

## References

- https://vercel.com/docs/git
- https://vercel.com/docs/deployments
- https://vercel.com/docs/deployments/rollback-production-deployment
