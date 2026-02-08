import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ExternalLink } from 'lucide-react'

export default function SanitySetupNotice() {
  return (
    <Card className="border-yellow-200 bg-yellow-50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-yellow-600" />
          <CardTitle className="text-yellow-900">Sanity CMS Not Configured</CardTitle>
        </div>
        <CardDescription className="text-yellow-800">
          To see content and upload practice sheets, you need to set up Sanity CMS.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-yellow-900">
        <div>
          <h3 className="font-semibold mb-2">Quick Setup (5 minutes):</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Go to{' '}
              <a
                href="https://www.sanity.io/manage"
                target="_blank"
                rel="noopener noreferrer"
                className="underline inline-flex items-center gap-1"
              >
                sanity.io/manage
                <ExternalLink className="h-3 w-3" />
              </a>{' '}
              and create a free account
            </li>
            <li>Click "Create project" and name it "Daily Practice Hub"</li>
            <li>Copy your Project ID</li>
            <li>Create an API token with Editor permissions</li>
            <li>
              Add both to <code className="bg-yellow-100 px-1 py-0.5 rounded">.env.local</code>:
              <pre className="bg-yellow-100 p-2 rounded mt-2 overflow-x-auto">
{`NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-token"`}
              </pre>
            </li>
            <li>Restart the development server</li>
          </ol>
        </div>
        <div className="pt-4 border-t border-yellow-200">
          <p className="font-semibold mb-1">Need detailed instructions?</p>
          <p>
            See{' '}
            <a href="/SANITY_SETUP.md" className="underline">
              SANITY_SETUP.md
            </a>{' '}
            for the complete guide.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
