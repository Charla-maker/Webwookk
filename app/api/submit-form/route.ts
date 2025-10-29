import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Get client info
    const ip_address = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const user_agent = request.headers.get('user-agent') || 'unknown'
    
    // Prepare data for Supabase
    const submissionData = {
      name: body.name,
      phone: body.phone,
      email: body.email,
      make: body.make,
      model: body.model,
      year: body.year,
      condition: body.condition,
      message: body.message || '',
      location_page: body.location_page || 'home',
      ip_address,
      user_agent,
      status: 'new' as const,
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([submissionData])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit form', details: error.message },
        { status: 500 }
      )
    }

    // TODO: Send email notification (optional)
    // You can add email sending logic here using Resend or another service

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        data 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
